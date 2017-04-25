var vm = new Vue({
  el: "#app",
  data: {
    people: [
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "TS850",
        base_copies: "128",
        hw_ncores: "64",
        hw_nchips: "8",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "2",
        basemean: "1320",
        peakmean: "1400",
        htmllink: "https://www.spec.org/cpu2006/results/res2010q3/cpu2006-20100914-13319.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "TS850 (8-sockets, Intel Xeon E7-8850)",
        base_copies: "160",
        hw_ncores: "80",
        hw_nchips: "8",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "1670",
        peakmean: "1730",
        htmllink: "https://www.spec.org/cpu2006/results/res2013q2/cpu2006-20130318-25590.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "NF5240M3 (Intel Xeon E5-2407, 2.2GHz)",
        base_copies: "8",
        hw_ncores: "8",
        hw_nchips: "2",
        hw_ncoresperchip: "4",
        hw_nthreadspercore: "1",
        basemean: "138",
        peakmean: "143",
        htmllink: "https://www.spec.org/cpu2006/results/res2013q2/cpu2006-20130320-25596.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "NF8520 (Intel Xeon E7-4820, 2.00 GHz)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "4",
        hw_ncoresperchip: "8",
        hw_nthreadspercore: "2",
        basemean: "750",
        peakmean: "788",
        htmllink: "https://www.spec.org/cpu2006/results/res2013q4/cpu2006-20131002-26505.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "K1 800",
        base_copies: "160",
        hw_ncores: "80",
        hw_nchips: "8",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "2000",
        peakmean: "2080",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20131223-27868.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "K1 800",
        base_copies: "160",
        hw_ncores: "80",
        hw_nchips: "8",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "1990",
        peakmean: "2090",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20131230-27877.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "K1 800",
        base_copies: "160",
        hw_ncores: "80",
        hw_nchips: "8",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "1720",
        peakmean: "1790",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q1/cpu2006-20140114-28157.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "TS860",
        base_copies: "192",
        hw_ncores: "96",
        hw_nchips: "8",
        hw_ncoresperchip: "12",
        hw_nthreadspercore: "2",
        basemean: "3040",
        peakmean: "3120",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q3/cpu2006-20140826-31047.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "TS860",
        base_copies: "192",
        hw_ncores: "96",
        hw_nchips: "8",
        hw_ncoresperchip: "12",
        hw_nthreadspercore: "2",
        basemean: "3130",
        peakmean: "3220",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20140908-31278.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "NF5280M4",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1370",
        peakmean: "1410",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141103-32667.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2699 v3)",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1370",
        peakmean: "1420",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141117-33039.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2660 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "890",
        peakmean: "928",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141201-33379.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2660 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "892",
        peakmean: "926",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141201-33392.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2660 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "893",
        peakmean: "927",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141201-33393.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2650 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "823",
        peakmean: "861",
        htmllink: "https://www.spec.org/cpu2006/results/res2014q4/cpu2006-20141215-33534.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Xeon E5-2620 v3)",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "502",
        peakmean: "525",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20141229-33920.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2695 v3)",
        base_copies: "56",
        hw_ncores: "28",
        hw_nchips: "2",
        hw_ncoresperchip: "14",
        hw_nthreadspercore: "2",
        basemean: "1100",
        peakmean: "1140",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150112-34373.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2670 v3)",
        base_copies: "48",
        hw_ncores: "24",
        hw_nchips: "2",
        hw_ncoresperchip: "12",
        hw_nthreadspercore: "2",
        basemean: "967",
        peakmean: "1010",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150202-34865.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2680 v3)",
        base_copies: "48",
        hw_ncores: "24",
        hw_nchips: "2",
        hw_ncoresperchip: "12",
        hw_nthreadspercore: "2",
        basemean: "1040",
        peakmean: "1080",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q1/cpu2006-20150309-35396.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5270M4 (Intel Xeon E5-2687W v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "948",
        peakmean: "986",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150711-36997.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2687W v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "951",
        peakmean: "985",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q3/cpu2006-20150712-37051.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5270M4 (Intel Xeon E5-2698 v3)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "2",
        hw_ncoresperchip: "16",
        hw_nthreadspercore: "2",
        basemean: "1250",
        peakmean: "1300",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20150922-37581.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5170M4 (Intel Xeon E5-2687W v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "947",
        peakmean: "986",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151010-37658.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2687W v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "948",
        peakmean: "986",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151010-37659.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2698 v3)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "2",
        hw_ncoresperchip: "16",
        hw_nthreadspercore: "2",
        basemean: "1290",
        peakmean: "1340",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151016-37676.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2699 v3)",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1410",
        peakmean: "1470",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151016-37677.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5170M4 (Intel Xeon E5-2699 v3)",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1410",
        peakmean: "1460",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151016-37678.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5180M4 (Intel Xeon E5-2699 v3)",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1410",
        peakmean: "1470",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151016-37679.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5180M4 (Intel Xeon E5-2698 v3)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "2",
        hw_ncoresperchip: "16",
        hw_nthreadspercore: "2",
        basemean: "1280",
        peakmean: "1340",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151018-37680.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5170M4 (Intel Xeon E5-2698 v3)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "2",
        hw_ncoresperchip: "16",
        hw_nthreadspercore: "2",
        basemean: "1280",
        peakmean: "1340",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151018-37681.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5270M4 (Intel Xeon E5-2698 v3)",
        base_copies: "64",
        hw_ncores: "32",
        hw_nchips: "2",
        hw_ncoresperchip: "16",
        hw_nthreadspercore: "2",
        basemean: "1280",
        peakmean: "1340",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151018-37682.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2695 v3)",
        base_copies: "56",
        hw_ncores: "28",
        hw_nchips: "2",
        hw_ncoresperchip: "14",
        hw_nthreadspercore: "2",
        basemean: "1160",
        peakmean: "1210",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151019-37691.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5180M4 (Intel Xeon E5-2695 v3)",
        base_copies: "56",
        hw_ncores: "28",
        hw_nchips: "2",
        hw_ncoresperchip: "14",
        hw_nthreadspercore: "2",
        basemean: "1160",
        peakmean: "1210",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151019-37702.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5270M4 (Intel Xeon E5-2699 v3)",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1410",
        peakmean: "1470",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151101-37757.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5270M4 (Intel Xeon E5-2695 v3)",
        base_copies: "56",
        hw_ncores: "28",
        hw_nchips: "2",
        hw_ncoresperchip: "14",
        hw_nthreadspercore: "2",
        basemean: "1160",
        peakmean: "1210",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151101-37758.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5170M4 (Intel Xeon E5-2695 v3)",
        base_copies: "56",
        hw_ncores: "28",
        hw_nchips: "2",
        hw_ncoresperchip: "14",
        hw_nthreadspercore: "2",
        basemean: "1160",
        peakmean: "1210",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151101-37759.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2650 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "831",
        peakmean: "872",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151101-37760.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5180M4 (Intel Xeon E5-2650 v3)",
        base_copies: "40",
        hw_ncores: "20",
        hw_nchips: "2",
        hw_ncoresperchip: "10",
        hw_nthreadspercore: "2",
        basemean: "832",
        peakmean: "872",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151101-37761.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5170M4 (Intel Xeon E5-2699 v3)",
        base_copies: "72",
        hw_ncores: "36",
        hw_nchips: "2",
        hw_ncoresperchip: "18",
        hw_nthreadspercore: "2",
        basemean: "1410",
        peakmean: "1470",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151101-37762.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5170M4 (Intel Xeon E5-2620W v3)",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "513",
        peakmean: "539",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151123-38101.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5270M4 (Intel Xeon E5-2620W v3)",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "513",
        peakmean: "539",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151123-38102.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5180M4 (Intel Xeon E5-2620W v3)",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "513",
        peakmean: "539",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151123-38103.html"
      },
      {
        test_sponsor: "Inspur Corporation",
        hw_model: "Inspur NF5280M4 (Intel Xeon E5-2620W v3)",
        base_copies: "24",
        hw_ncores: "12",
        hw_nchips: "2",
        hw_ncoresperchip: "6",
        hw_nthreadspercore: "2",
        basemean: "512",
        peakmean: "539",
        htmllink: "https://www.spec.org/cpu2006/results/res2015q4/cpu2006-20151123-38104.html"
      },
    ]
  }
});