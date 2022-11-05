function ucFirst(str) {
  if (str.length == 1) {
    return (str[0].toUpperCase());
  }

  else if (str == '') {

    return str;
  }

  else
    return (str[0].toUpperCase() + str.slice(1));
}
