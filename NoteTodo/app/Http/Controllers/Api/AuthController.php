<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends ApiController
{
    //
    public function register(Request $request)
    {
      $data = $request->only('name', 'email');
        $credentials = $request->only('email', 'password');
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ]);
        if ($validator->fails()) {
            return $this->setStatusCode(400)->setErrors($validator->messages())->withError($validator->messages()->first());
        }else{
            try{
                $data['password'] = bcrypt($request->password);
                User::create($data);
                $token = $this->guard()->attempt($credentials);
                return $this->respondWithToken($token);
            }catch (\Exception $e){
                return $this->setStatusCode(500)->withError($e->getMessage());
            }
        }
    }
}
