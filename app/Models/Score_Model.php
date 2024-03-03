<?php

namespace Models;

use CodeIgniter\Model;

class Score_Model extends Model
{
    protected
        $table = 'score';
    protected
        $primaryKey = 'id_score';
    protected
        $allowedFields = ['ID_SCORE', 'CPS_SCORE', 'TIME_SCORE', 'DATE_SCORE'];



}