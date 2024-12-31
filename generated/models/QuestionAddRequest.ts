/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {JudgeCase} from './JudgeCase';
import type {JudgeConfig} from './JudgeConfig';

export type QuestionAddRequest = {
    coreCode?: string;
    content?: string;
    judgeCase?: Array<JudgeCase>;
    judgeConfig?: JudgeConfig;
    tags?: Array<string>;
    title?: string;
    baseCode?: string;
};
