<?php

namespace Models;

use CodeIgniter\Model;

class User_Model extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'id_user';
    protected $allowedFields = ['ID_USER', 'ID_SCORE', 'EMAIL_USER', 'PASSWORD_USER', 'USERNAME_USER', 'KEYBOARD_USER', 'PROFILE_PICTURE_USER'];

}