//
// Copyright 2019 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
export * from './collection';
export * from './collections_filter';
export * from './checkpoint';
export * from './cpu_intervals';
export * from './cpu_layers';
export * from './interval';
export * from './layer';
export * from './sched_event';
export * from './thread';
export * from './ftrace_interval';
export * from './thread_intervals';
export * from './utilization_metrics';

import * as events from './events';
import * as collectionDataServices from './collection_data_services';
import * as metricsServices from './metrics_services';
import * as renderDataServices from './render_data_services';

/**
 * All service interfaces
 */
export const services = {
  events,
  ...collectionDataServices,
  ...metricsServices,
  ...renderDataServices,
};
