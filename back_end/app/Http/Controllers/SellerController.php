<?php

namespace App\Http\Controllers;

use App\Models\Certification;
use App\Models\Education;
use App\Models\Language;
use App\Models\SellerInfos;
use App\Models\Skill;
use App\Models\WorkExperience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    public function storeSellerInfos(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'about_me' => ['required', 'string'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->messages(),
            ], 422);
        }
        /** @var User $user */
        $user = Auth::user();
        $sellerInfos = new SellerInfos();
        $sellerInfos->user_id = $user->id;
        $sellerInfos->first_name = $request->first_name;
        $sellerInfos->last_name = $request->last_name;
        $sellerInfos->about_me = $request->about_me;
        $sellerInfos->save();
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move('images/profiles', $imageName);
            $imagePath = 'images/profiles/' . $imageName;
            $user->update(['image' => $imagePath]);
        }
        if ($request->has('languages')) {
            foreach ($request->languages as $language) {
                $objLanguage = json_decode($language, true);
                /* dd($objLanguage); */
                Language::create([
                    'user_id' => $user->id,
                    'name' => $objLanguage['name'],
                    'level' => $objLanguage['level'],
                ]);
            }
        }
        if ($request->has('skills')) {
            foreach ($request->skills as $skill) {
                $objSkill = json_decode($skill, true);
                Skill::create([
                    'user_id' => $user->id,
                    'name' => $objSkill['skill'],
                    'level' => $objSkill['level'],
                ]);
            }
        }
        if ($request->has('work_experience')) {
            foreach ($request->work_experience as $work_experience) {
                $objWorkExperience = json_decode($work_experience, true);
                /* dd($objWorkExperience['years']['startYear']); */
                WorkExperience::create([
                    'user_id' => $user->id,
                    'company_name' => $objWorkExperience['company'],
                    'job_title' => $objWorkExperience['specialization'],
                    'description' => $objWorkExperience['description'],
                    'start_date' => $objWorkExperience['years']['startYear'],
                    'end_date' => $objWorkExperience['years']['endYear'],
                ]);
            }
        }
        if ($request->has('educations')) {
            foreach ($request->educations as $education) {
                $objEducation = json_decode($education, true);
                Education::create([
                    'user_id' => $user->id,
                    'university' => $objEducation['university'],
                    'degree' => $objEducation['degree'],
                    'start_date' => $objEducation['years']['startYear'],
                    'end_date' => $objEducation['years']['endYear'],
                    'city' => $objEducation['city'],
                    'country' => $objEducation['country'],
                ]);
        }}
        if ($request->has('certifications')) {
            foreach ($request->certifications as $certification) {
                $objCertification = json_decode($certification, true);
                Certification::create([
                    'user_id' => $user->id,
                    'name' => $objCertification['certificate'],
                    'certified_by' => $objCertification['certifiedFrom'],
                    'start_date' => $objWorkExperience['years']['startYear'],
                    'end_date' => $objWorkExperience['years']['endYear'],
                ]);
            }
        }

        return response()->json([
            'success' => true,
            'data' => $sellerInfos
        ], 200);
    }
}
