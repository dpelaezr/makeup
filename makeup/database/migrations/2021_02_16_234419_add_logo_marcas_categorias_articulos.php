<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLogoMarcasCategoriasArticulos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('marcas', function (Blueprint $table) {
            $table->string('logo',50)->after('nombre_marca');
        });

        Schema::table('categorias', function (Blueprint $table) {
            $table->string('logo',50)->after('nombre_categoria');
        });
	    Schema::table('articulos', function (Blueprint $table) {
            $table->string('logo',50)->after('precio');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('marcas', function (Blueprint $table) {
            $table->dropColumn('logo');
        });

        Schema::table('categorias', function (Blueprint $table) {
            $table->dropColumn('logo');
        });
	    Schema::table('articulos', function (Blueprint $table) {
            $table->dropColumn('logo');
        });
    }
}
