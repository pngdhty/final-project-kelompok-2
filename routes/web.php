<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('cat', 'CategoryController')->except('create', 'edit');
Route::resource('prod', 'ProductController')->except('create', 'edit');
Route::resource('cart', 'CartController')->except('create', 'edit');
Route::resource('order', 'OrderController')->except('create', 'edit');
Route::post('order/midtrans', 'OrderController@midtrans');
Route::resource('order-detail', 'OrderDetailController')->except('create', 'edit');
Route::get('log', 'LogController@index');

Route::middleware('auth')->namespace('Chat')->group(function () {
	// Route::view('/chat', 'chat.index');
	Route::get('/chat/all-chats', 'ChatController@allChats');
	Route::post('/chat/new', 'ChatController@store');
});

Auth::routes();

Route::get('/{any?}', function () {
	return view('layouts.app');
});
