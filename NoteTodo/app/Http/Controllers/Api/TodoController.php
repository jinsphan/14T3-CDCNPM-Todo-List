<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TodoController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit = request()->limit ?: 10;
        $todo=Todo::orderBy('created_at','desc')->paginate($limit);
        foreach ($todo as $item) {
          $item->created=$item->created_at->format('d M Y');
        }
        return $this->setStatusCode(200)->withSuccess('index',$todo);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      // $rules = $this->initRule();
      $messages = $this->initMessage();
      $validator = Validator::make($request->all(), [
        'title' => 'required|String|max:255',
      ], $messages);
      if ($validator->fails()) {
        return $this->setStatusCode(400)->setErrors($validator->messages())->withError('error');
      } else {
        try {
          echo 'validator success';
            $data = $this->dataFilter($request);
            $todo = Todo::create($data);
            return $this->withSuccess('Stored', $todo);
        } catch (\Exception $e) {
          echo 'validator but try catch fail';
            return $this->setStatusCode(500)->withError($e->getMessage());
        }
      }
    }

    ///
    // public function initRule(){
    //     $rules = [];
    //     $rules['title'] = 'required|string|max:255';
    //     return $rules;
    // }
    ////


    /////

    public function initMessage(){
    $messages = [];
    $messages = [
        'title' => "Please update the todo's title",
    ];
    return $messages;
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $todo=Todo::find($id);
        if($todo){
          $todo->created=$todo->created_at->format('d M Y');
          $todo->user;
        }
        return $this->withSuccess('result',$todo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $todo=Todo::find($id);
      $messages = $this->initMessage();
      $validator = Validator::make($request->all(), [
        'title' => 'required|String|max:255',
      ], $messages);
      if ($validator->fails()) {
        return $this->setStatusCode(400)->setErrors($validator->messages())->withError('error');
      } else {
        try {
          echo 'validator success';
            $todo['title']=$request->title;
            $todo['description']=$request->description;
            if ($request->color) {
              $todo['color']=$request->color;
            }
            if ($request->due_day) {
             $todo['due_day']=$request->due_day;
            }
            $todo->save();
            return $this->withSuccess('Updated', $todo);
        } catch (\Exception $e) {
          echo 'validator but try catch fail';
            return $this->setStatusCode(500)->withError($e->getMessage());
        }
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $todo=Todo::find($id);
      $messages = $this->initMessage();
        try {
            $todo->delete();
            return $this->withSuccess('Deleted', $todo);
        } catch (\Exception $e) {

            return $this->setStatusCode(500)->withError($e->getMessage());
      }
    }
    public function dataFilter($data){
      echo 'test3';
        $pureData = [];
        $pureData['title'] =  $data->title;
        $pureData['color'] =  $data->color;
        $pureData['description'] =  $data->description;
        $pureData['due_day'] =  $data->due_day;
        $pureData['user_id'] =  $data->user_id;

        return $pureData;
    }
}
