<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSharedListsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('shared_lists', function (Blueprint $table) {
				$table->increments('id');
				$table->string('name');
				$table->integer('user_id')->unsigned();
				$table->boolean('shared');
				$table->timestamps();
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
		$table->dropForeign('sharedlists_user_id_foreign');
		Schema::drop('sharedlists');
	}

}