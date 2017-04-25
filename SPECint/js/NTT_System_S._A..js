var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Business W 986G",
        base_copies: "2",
        hw_ncores: "2",
        hw_nchips: "1",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "41.7",
        peakmean: "44.8",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20081205-06175.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Business W 986G",
        base_copies: "2",
        hw_ncores: "2",
        hw_nchips: "1",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "41.7",
        peakmean: "44.8",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20081205-06178.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S8 Series",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "100",
        peakmean: "105",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20081208-06201.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan 516I",
        base_copies: "4",
        hw_ncores: "4",
        hw_nchips: "1",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "73.4",
        peakmean: "77.8",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20081208-06205.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S8 Series",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "120",
        peakmean: "131",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q1/cpu2006-20090115-06409.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S6 Series (Intel Xeon E5420)",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "116",
        peakmean: "125",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q2/cpu2006-20090311-06640.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan 2206I (Intel Xeon E5410)",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "112",
        peakmean: "117",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q2/cpu2006-20090126-06473.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S8 Series (Intel Xeon E5410)",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "111",
        peakmean: "120",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q2/cpu2006-20090130-06481.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S29 series (Intel Xeon E5520)",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "179",
        peakmean: "191",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090710-08140.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Business W 907G",
        base_copies: "2",
        hw_ncores: "2",
        hw_nchips: "1",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "26.9",
        peakmean: "27.9",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090729-08285.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Business W 907G",
        base_copies: "2",
        hw_ncores: "2",
        hw_nchips: "1",
        hw_ncoresperchip: "2",
        hw_nthreadspercore: "1",
        basemean: "27.4",
        peakmean: "28.3",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090729-08288.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S31 series (Intel Xeon E5506)",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "132",
        peakmean: "141",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090824-08436.html"
      },
      {
        test_sponsor: "NTT System S. A.",
        hw_model: "NTT Tytan S32 series (Intel Xeon E5520)",
        base_copies: "16",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "2",
        basemean: "185",
        peakmean: "Not Run",
        htmllink: "https://www.spec.org/cpu2006/results/res2009q3/cpu2006-20090901-08542.html"
      },
    ]
  }
});
