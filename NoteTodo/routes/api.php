<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
  'prefix' =>'v1',
  'namespace' =>'Api',
],function (){
  //user
  Route::post('register','AuthController@register');

  //todo
  Route::get('todo','TodoController@index');
  Route::post('todo','TodoController@store');
  // Route::post('todo',function(Request $request){
  //   $test1=$request->input('user_id');
  //   $test2=$request->input('tittle');
  //   $test3=$request->input('description');
  //   echo $test1;
  //   echo $test2;
  //   echo $test3;
  // });




}
);
