<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ListUserTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('list_user', function (Blueprint $table) {
				$table->increments('id');
				$table->integer('list_id')->unsigned();
				$table->integer('user_id')->unsigned();
				$table->foreign('list_id')->references('id')->on('lists');
				$table->foreign('user_id')->references('id')->on('users');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		$table->dropForeign('lists_user_user_id_foreign');
		$table->dropForeign('lists_user_list_id_foreign');
		Schema::drop('list_user');
	}

}
