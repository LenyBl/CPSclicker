DROP DATABASE IF EXISTS CPSclicker;

CREATE DATABASE IF NOT EXISTS CPSclicker;
USE CPSclicker;
# -----------------------------------------------------------------------------
#       TABLE : USER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS USER
 (
   ID_USER INTEGER(2) NOT NULL AUTO_INCREMENT ,
   ID_SCORE INTEGER(2) NOT NULL  ,
   EMAIL_USER VARCHAR(128) NULL  ,
   PASSWORD_USER VARCHAR(255) NULL  ,
   USERNAME_USER VARCHAR(128) NULL  ,
   MOUSE_USER VARCHAR(128) NULL  ,
   KEYBOARD_USER VARCHAR(128) NULL  ,
   PROFILE_PICTURE_USER LONGBLOB NULL  
   , PRIMARY KEY (ID_USER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE USER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_USER_SCORE
     ON USER (ID_SCORE ASC);

# -----------------------------------------------------------------------------
#       TABLE : SCORE
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS SCORE
 (
   ID_SCORE INTEGER(2) NOT NULL AUTO_INCREMENT ,
   CPS_SCORE BIGINT(4) NULL  ,
   TIME_SCORE DECIMAL(10,2) NULL  ,
   DATE_SCORE DATETIME NULL  
   , PRIMARY KEY (ID_SCORE) 
 ) 
 comment = "";


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE USER 
  ADD FOREIGN KEY FK_USER_SCORE (ID_SCORE)
      REFERENCES SCORE (ID_SCORE) ;

