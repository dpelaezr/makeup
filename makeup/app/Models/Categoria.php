<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $table = 'categorias';
    protected $primarykey = 'categoriaid';
    protected $fillable = ['nombre_categoria','categoriaid','created_at','updated_at'];
    public $timestamps = true;

    public function articulo() {
        return $this->hasMany(Articulo::class,'categoriaid', 'categoriaid');
    }
}