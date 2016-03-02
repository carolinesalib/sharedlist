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

    public function getSharedList($id){
      $List  = SharedList::find($id);
      return response()->json($List);
    }

    public function createSharedList(Request $request){
      $List = SharedList::create($request->all());
      return response()->json($List);
    }

    public function deleteSharedList($id){
      $List = SharedList::find($id);
      $List->delete();

      return response()->json('deleted');
    }

    public function updateSharedList(Request $request, $id){
      $List = SharedList::find($id);
      $List->name = $request->input('name');
      $List->user_id = $request->input('user_id');
      $List->shared = $request->input('shared');
      $List->save();

      return response()->json($List);
    }
}
