<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class UserController extends Controller{

  public function index(){
    $Users  = User::all();
    return response()->json($Users);
  }

  public function getUser($id){
    $User  = User::find($id);
    return response()->json($User);
  }

  public function createUser(Request $request){
    $User = User::create($request->all());
    return response()->json($User);
  }

  public function deleteUser($id){
    $User  = User::find($id);
    $User->delete();

    return response()->json('deleted');
  }

  public function updateUser(Request $request,$id){
    $User  = User::find($id);
    $User->name = $request->input('name');
    $User->email = $request->input('email');
    $User->save();

    return response()->json($User);
  }
}
