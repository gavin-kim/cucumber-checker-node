import { Request, Response } from "express";
import { Job } from "../../model/cucumber/job";
import { CucumberService } from "../../service/cucumber.service";


export class CucumberController {

    public getFailedScenarios(request: Request, response: Response) {
        const job = request.query.job;
        const buildId = request.query.buildId;

        console.log(`getFailedScenarios in controller job:${job}, buildId: ${buildId}`);

        new CucumberService().getFailedScenarios(Job.MANUAL_ORACLE_JOB, buildId);
    }
}