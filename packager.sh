#!/usr/bin/env bash
RNMK_DIR="node_modules/react-native-material-kit"

solveRNMK() {
  DIR="$1"

  if [[ -L "$DIR" ]];
  then
    RNMK_PATH=`readlink -f $DIR`
    if [[ -L "$RNMK_PATH" ]];
    then
      solveRNMK "$RNMK_PATH"
    fi
  fi
}

solveRNMK "$RNMK_DIR"

cd node_modules/react-native/packager
if [ $RNMK_PATH ];
then
  echo "solved RNMK -> $RNMK_PATH"
  ./packager.sh --root="$RNMK_PATH"
else
  ./packager.sh
fi
