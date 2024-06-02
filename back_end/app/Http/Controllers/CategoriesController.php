<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getCategories()
    {
        $categories = Category::all();
        foreach ($categories as $category) {
            $category->subcategories;
        }
        return response()->json($categories);
    }
}
