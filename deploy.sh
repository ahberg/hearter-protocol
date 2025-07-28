#!/bin/bash
 npm run build 
 rsync -a --progress --delete dist/ 8911:/var/www/hearter/public_html/