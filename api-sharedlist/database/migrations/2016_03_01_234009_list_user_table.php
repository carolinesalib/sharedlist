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
				$table->foreign('list_id')->references('id')->on('list');
				$table->foreign('user_id')->references('id')->on('user');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		$table->dropForeign('list_user_user_id_foreign');
		$table->dropForeign('list_user_list_id_foreign');
		Schema::drop('list_user');
	}

}
