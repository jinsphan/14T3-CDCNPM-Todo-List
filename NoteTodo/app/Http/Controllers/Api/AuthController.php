<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends ApiController
{

  public function login(Request $request)
{
  echo "1";
    $validator = Validator::make($request->all(), [
        'email' => 'required|string|max:255',
        'password' => 'required|string'
    ]);

    if ($validator->fails()) {
      echo "2";
        return $this->setStatusCode(400)->setErrors($validator->messages())->withError($validator->messages()->first());
    }else {
      echo "3";
        $credentials = $request->only('email', 'password');
        if(isset($request->loginType) && $request->loginType == 'web'){
          echo "4";
            if ($token = $this->guard('web')->attempt($credentials)) {
              echo "5";
                return $this->respondWithToken($token);
            }
        }else{
          echo "6";
            if ($token = $this->guard()->attempt($credentials)) {
              echo "7";
                return $this->respondWithToken($token);
            }
        }


        return $this->setStatusCode(400)->withError(trans('auth.failed'));
    }
}

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
