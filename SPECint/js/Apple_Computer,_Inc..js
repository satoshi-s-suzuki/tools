var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Apple Computer, Inc.",
        hw_model: "Xserve (3000 MHz Intel Dual-Core Xeon, 1333 MHz FSB)",
        base_copies: "4",
        hw_ncores: "4",
        hw_nchips: "2",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "48.9",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2006q4/cpu2006-20061127-00160.html"
      },
    ]
  }
});
