<?php

namespace App\Http\Controllers;

use App\SharedList;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class SharedListController extends Controller{

  public function index(){
    $Lists  = SharedList::all();
    return response()->json($Lists);
  }
}
