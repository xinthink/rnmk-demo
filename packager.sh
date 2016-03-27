#!/usr/bin/env bash
RNMK_DIR="node_modules/react-native-material-kit"

case `uname` in
  Linux )
    CMD_READLINK="readlink -f"
    ;;
  * )
    CMD_READLINK="readlink"
    ;;
esac

solveRNMK() {
  DIR="$1"

  if [[ -L "$DIR" ]];
  then
    RNMK_PATH=`$CMD_READLINK $DIR`
    if [[ -L "$RNMK_PATH" ]];
    then
      solveRNMK "$RNMK_PATH"
    fi
  fi
}

solveRNMK "$RNMK_DIR"

# Resolve module name conflicts
rm -rf node_modules/react-native/ReactAndroid/build/intermediates

cd node_modules/react-native/packager
if [ $RNMK_PATH ];
then
  echo "solved RNMK -> $RNMK_PATH"
  ./packager.sh --root="$RNMK_PATH"
else
  ./packager.sh
fi
