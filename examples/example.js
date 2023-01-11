const obj = {
  attr: 1,
  log() {
    console.log(this.attr);

    const ex = function () {
      console.log("example", this.attr);
    };
    // naudoti .bind(this) kad prikabinti this prie ex funkcijos

    const ex2 = () => {
      console.log("example2", this.attr);
    };

    ex();
    ex2();
  },
};

const test = obj.log;
obj.log();
