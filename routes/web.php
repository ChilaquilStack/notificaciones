<?php
//Auth::routes();
Route::match(['post', 'get'],'login', [ 'as' => 'login', 'uses' => 'Auth\LoginController@index']);
//Route::match(['post', 'get'],'register', [ 'as' => 'register', 'uses' => 'Auth\RegisterController@index']);
Route::get('logout','Auth\LoginController@logout')->name('logout');
Route::get('/', 'HomeController@index')->name('home');
