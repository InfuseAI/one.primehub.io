import React from 'react'
import {
  InboxIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/outline'

export default function Coffee () {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "#365abd"}}
                >
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Go Grab a Coffee and Say Goodbye to Complex Infrastructure
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  With just 1-click, PrimeHub will setup everything you need for your machine learning adventure on a cloud-native environment. <br /><br />
                  Don't waste weeks on setting up 10+ different DevOps tools. Use PrimeHub to get a <b>fully functional JupyterLab</b> environment in no time, to reduce cost, and to scale your team's productivity by 10x. <br /><br />  More features include:
                </p>
                <li>
                  <a
                    href="https://www.infuseai.io/products/primhub-ai-platform#product-benefit"
                    class="text-base text-gray-500 hover:text-gray-900"
                    target="_blank"
                  >
                    Cluster computing in the cloud or on-premises
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.infuseai.io/products/primhub-ai-platform#product-benefit"
                    class="text-base text-gray-500 hover:text-gray-900"
                    target="_blank"
                  >
                    Resource management for teams
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.infuseai.io/products/primhub-ai-platform#product-benefit"
                    class="text-base text-gray-500 hover:text-gray-900"
                    target="_blank"
                  >
                    Enterprise features such as SSO, account protection, and so on!
                  </a>
                </li>
                <div className="mt-6">
                  <a
                    href="https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?stackName=primehub-starter&templateURL=https://primehub.s3.amazonaws.com/cloudformation/v0.8.3/primehub-starter-cloudformation.yaml"
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;This is a Game Changer
                    &rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Yunfang, Data Team Lead
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/cf.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "#365abd"}}
                >
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Designed for You
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  PrimeHub is <b>open source</b> and <b>cloud-native</b>. <br /> <br />
                  Don't be constrained by the tools, PrimeHub will adapt to your preferred workflow and work in conjunction with your technology stacks.
                </p>
                <div className="mt-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3JeBYdMPtc9-Yb7UjdNKO6osWOK1JJ5-u5_TLFbEf-LtaxQ/viewform?usp=sf_link"
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Share your workflow with us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/now.svg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mt-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center"
                  style={{backgroundColor: "#365abd"}}
                >
                  <UserGroupIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  It's About Collaboration & Sustainability
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  PrimeHub focus on <b>Machine Learning Orchestration</b> throughout the entire ML lifecycle. <br /><br />
                  We build the infrastructure ready to <b>adapt to the next 10 year</b> of MLOps no matter what tools or platforms change, ensuring the high competency for your enterprise ML investment.
                </p>
                <div className="mt-6">
                  <a
                    href="https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?stackName=primehub-starter&templateURL=https://primehub.s3.amazonaws.com/cloudformation/v0.8.3/primehub-starter-cloudformation.yaml"
                    className="inline-flex bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                    style={{backgroundColor: "#365abd"}}
                  >
                    Try Free
                  </a>
                </div>
                <span className="text-sm text-gray-400 block mt-4">No credit card required. Starting from $999/month for 3 users</span>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/colab.svg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
