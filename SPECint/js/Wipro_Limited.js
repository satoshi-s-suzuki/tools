var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Wipro Limited",
        hw_model: "Wipro NetPowerZ2243/NetPowerZ2243R",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "358",
        peakmean: "379",
        htmllink: "https://www.spec.org/cpu2006/results/res2011q3/cpu2006-20110629-17285.html"
      },
      {
        test_sponsor: "Wipro Limited",
        hw_model: "NetPower Z2263",
        base_copies: "32",
        hw_ncores: "16",
        hw_nchips: "2",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "2",
        basemean: "624",
        peakmean: "646",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20130708-26041.html"
      },
    ]
  }
});
