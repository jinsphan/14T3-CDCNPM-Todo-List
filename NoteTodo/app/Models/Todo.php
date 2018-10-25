<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    //
    protected $table='todo';
    protected $fillable = ['user_id', 'title','color','description','due_day'];

    /**
     * user
     *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function user(){
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
