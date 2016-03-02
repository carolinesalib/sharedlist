<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function() use ($app) {
    return "Lumen RESTful API for SharedList app";
});

$app->group(['prefix' => 'api/v1','namespace' => 'App\Http\Controllers'], function($app)
{
    #User
    $app->get('user','UserController@index');
    $app->get('user/{id}','UserController@getuser');
    $app->post('user','UserController@createUser');
    $app->put('user/{id}','UserController@updateUser');
    $app->delete('user/{id}','UserController@deleteUser');

    #SharedList
    $app->get('sharedlist','SharedListController@index');
    $app->get('sharedlist/{id}','SharedListController@getSharedList');
    $app->post('sharedlist','SharedListController@createSharedList');
    $app->put('sharedlist/{id}','SharedListController@updateSharedList');
    $app->delete('sharedlist/{id}','SharedListController@deleteSharedList');
});
