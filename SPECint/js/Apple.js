var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Apple Computer",
        hw_model: " Inc.",
        base_copies: "Xserve (3000 MHz Intel Dual-Core Xeon",
        hw_ncores: " 1333 MHz FSB)",
        hw_nchips: "4",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "2",
        peakmean: "1"
      },
      {
        test_sponsor: "Apple",
        hw_model: " Inc.",
        base_copies: "3.0 GHz 8-Core Xserve",
        hw_ncores: "8",
        hw_nchips: "8",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "4",
        basemean: "1",
        peakmean: "106"
      },
    ]
  }
});
