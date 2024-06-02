<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Service;
use App\Models\Tag;


class ServiceController extends Controller
{

    public function index() {
        $services = Service::with('user')->with('subcategory')->with('serviceimages')->with('servicetags')->with('extras')->get();
        foreach ($services as $service) {
            foreach ($service->serviceimages as $image) {
                $image->image = asset($image->image);
            }
            /** @var Service $service */
            if ($service->delivery_time == 1) {
                $service->displayed_delivery_time = '1 day';
            }else if ($service->delivery_time < 14) {
                $service->displayed_delivery_time = $service->delivery_time . ' days';
            }else if ($service->delivery_time >= 14 && $service->delivery_time < 30) {
                $service->displayed_delivery_time = floor($service->delivery_time / 7) . ' weeks';
            }else if ($service->delivery_time >= 30 && $service->delivery_time < 365) {
                $service->displayed_delivery_time = floor($service->delivery_time / 30) . ' months';
            }else if ($service->delivery_time >= 365) {
                $service->displayed_delivery_time = floor($service->delivery_time / 365) . ' years';
            }
        }

        return $services;
    }

    public function getById($id) {
        $service = Service::with('user')->with('subcategory')->with('serviceimages')->with('servicetags')->with('extras')->find($id);
        foreach ($service->serviceimages as $image) {
            $image->image = asset($image->image);
        }
        foreach ($service->extras as $extra) {
            $extra->will_delay = $extra->will_delay ? true : false;
            $extra->checked = false;
        }
        return $service;
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'delivery_time' => 'required',
            'sub_category_id' => 'required | exists:sub_categories,id',
            'tags' => 'required',
            'images' => 'required',
            
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $service = new Service();
        $service->user_id = auth()->user()->id;
        $service->title = $request->title;
        $service->description = $request->description;
        $service->price = $request->price;
        $service->delivery_time = $request->delivery_time;
        $service->rating = 0;
        $service->sub_category_id = $request->sub_category_id;
        $service->save();
        $tags = explode(',', $request->tags);
        foreach ($tags as $tag) {
            if (!Tag::where('name', $tag)->exists()) {
                Tag::create(['name' => $tag]);
            }
            $service->servicetags()->create(['tag_id' => Tag::where('name', $tag)->first()->id]);
        }
        $images = $request->images;
        /* dd($images); */
        if ($images) {
            foreach ($images as $image) {
                /* dd($request->file('images')); */
                $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                $image->move('images/services', $imageName);
                $imagePath = 'images/services/' . $imageName;
                $service->serviceimages()->create(['image' => $imagePath]);
            }
        }

        if ($request->has('extras')) {
            foreach ($request->extras as $extra) {
                
                $exteraObj = json_decode($extra, true);
                $exteraObj['will_delay'] = $exteraObj['will_delay'] == 'true' ? true : false;
                $exteraObj['created_at'] = now();
                $exteraObj['updated_at'] = now();
                $service->extras()->create($exteraObj);
            }
        }


        $service->save();
    }
}
