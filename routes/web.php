<?php

Auth::routes();


Route::group(['middleware' => ['auth']], function(){

    Route::get('/photos', 'GalleryController@getPhotos');

    Route::post('/photos', 'GalleryController@uploadPhotos');

    Route::delete('/photos', 'GalleryController@deletePhoto');

    Route::get('/logout', 'Auth\LoginController@logout');

    Route::get('{all?}', 'GalleryController@index')->where('all', '([A-z\d-\/_.]+)?');
});
