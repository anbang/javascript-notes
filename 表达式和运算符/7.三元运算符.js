function trueOrFalse(val) {
    return val?console.log(val+" is true"):console.log(val+" is false")
}
trueOrFalse(null);
trueOrFalse(undefined);
trueOrFalse(0);
trueOrFalse(NaN);
trueOrFalse(-0);//0===-0
trueOrFalse(false);
trueOrFalse("");
trueOrFalse(" ");
trueOrFalse({});
trueOrFalse([]);
trueOrFalse(1);