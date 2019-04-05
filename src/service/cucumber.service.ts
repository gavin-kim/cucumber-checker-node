import { Job } from "../model/cucumber/job";
import { Scenario } from "../model/cucumber/scenario";
import request from "request";

export class CucumberService {

    private static readonly CUCUMBER_HOST = "http://wfm-ci.infor.com:8080";
    private static readonly CUCUMBER_HTML_REPORT_OVERVIEW_FEATURES = "/cucumber-html-reports/overview-features.html";


    public getFailedScenarios(job: Job, buildId: number): Array<Scenario> {

        const url = `${CucumberService.CUCUMBER_HOST}/job/${job}/${buildId}/${CucumberService.CUCUMBER_HTML_REPORT_OVERVIEW_FEATURES}`;

        request(url, (error, response, body) => {
            console.log(body);
        });

        return []
    }
}