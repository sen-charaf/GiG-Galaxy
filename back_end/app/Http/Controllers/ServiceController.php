<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Service;
use App\Models\Tag;

class ServiceController extends Controller
{

    public function index() {
        return Service::with('user')->with('subcategory')->with('servicetags')->with('extras')->get();
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
                $service->serviceimages()->create(['image' => $imageName]);
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
