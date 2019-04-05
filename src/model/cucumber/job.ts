export enum Job {
    MANUAL_ORACLE_JOB = "ExecuteCucumberRun-Oracle-Parallel",
    MANUAL_SQL_SERVER_JOB = "ExecuteCucumberRun--SQLServer-Sequential",
    BASIC_STEPS_ASV_SQL_SERVER = "rCucumber-BasicSteps-ASV-SQLServer-AutoTriggeredOnly",
    BASIC_STEPS_MR_OTS_SQL_SERVER = "rCucumber-BasicSteps-MROTS-SQLServer-AutoTriggeredOnly",
    BASIC_STEPS_NON_ASV_SQL_SERVER = "rCucumber-BasicSteps-NonASV-SQLServer-AutoTriggeredOnly",
    FULL_QA_REGRESSION_SQL_SERVER = "rCucumber-FullQARegression-SQLServer-AutoTriggeredOnly"
}