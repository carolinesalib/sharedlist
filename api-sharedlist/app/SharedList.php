<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class SharedList extends Model
{
   protected $fillable = ['id', 'name', 'user_id', 'shared'];
}
?>
