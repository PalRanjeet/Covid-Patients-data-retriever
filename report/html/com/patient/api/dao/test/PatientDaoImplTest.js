var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":236,"id":88,"methods":[{"el":48,"sc":2,"sl":42},{"el":54,"sc":2,"sl":50},{"el":91,"sc":2,"sl":86},{"el":99,"sc":2,"sl":93},{"el":148,"sc":2,"sl":142},{"el":157,"sc":2,"sl":150},{"el":165,"sc":2,"sl":159},{"el":189,"sc":2,"sl":183},{"el":196,"sc":2,"sl":191},{"el":219,"sc":2,"sl":213},{"el":227,"sc":2,"sl":221},{"el":235,"sc":2,"sl":229}],"name":"PatientDaoImplTest","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":93}],"name":"testNullObjectInAddPatient","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":98}]},"test_1":{"methods":[{"sl":213}],"name":"testRuntimeExceptionInDeletePatient","pass":true,"statements":[{"sl":216},{"sl":217},{"sl":218}]},"test_10":{"methods":[{"sl":86}],"name":"addPatientTestRuntimeException","pass":true,"statements":[{"sl":89},{"sl":90}]},"test_11":{"methods":[{"sl":142}],"name":"testNegativePatientIdGetPatient1","pass":false,"statements":[{"sl":145},{"sl":146},{"sl":147}]},"test_13":{"methods":[{"sl":159}],"name":"testZeroPatientIdInGetPatient","pass":true,"statements":[{"sl":162},{"sl":163},{"sl":164}]},"test_14":{"methods":[{"sl":150}],"name":"testNegativePatientIdGetPatient","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":155}]},"test_3":{"methods":[{"sl":221}],"name":"testNegativePatientIdInDeletePatient","pass":true,"statements":[{"sl":224},{"sl":225},{"sl":226}]},"test_4":{"methods":[{"sl":183}],"name":"testNullObjectInUpdatePatient","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":188}]},"test_6":{"methods":[{"sl":229}],"name":"testZeroPatientIdInDeletePatient","pass":true,"statements":[{"sl":232},{"sl":233},{"sl":234}]},"test_7":{"methods":[{"sl":191}],"name":"updatePatientTestRuntimeException","pass":true,"statements":[{"sl":194},{"sl":195}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [10], [], [], [10], [10], [], [], [0], [], [], [0], [0], [0], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [11], [], [], [11], [11], [11], [], [], [14], [], [], [14], [14], [14], [], [], [], [13], [], [], [13], [13], [13], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [4], [], [], [4], [4], [4], [], [], [7], [], [], [7], [7], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [], [1], [1], [1], [], [], [3], [], [], [3], [3], [3], [], [], [6], [], [], [6], [6], [6], [], []]
