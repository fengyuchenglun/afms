/**
 * routes.js
 *
 * Config the routes
 *
 */

import AppLayout from './layouts/AppLayout';
import SimpleForm from './pages/SimpleForm';
import BasicForm from './pages/BasicForm';
import FormLayout from './pages/FormLayout';
import AdvancedSearchForm from './pages/AdvancedSearchForm';
import FormFieldStatus from './pages/FormFieldStatus';
import AsyncDataSource from './pages/AsyncDataSource';
import FormConfigHelper from './pages/FormConfigHelper';
import Validation from './pages/Validation';
import FormLinkage from './pages/FormLinkage';
import CustomFormField from './pages/CustomFormField';
import MultipleForm from './pages/MultipleForm';
import DynamicFormField from './pages/DynamicFormField';
import ComplexLayout from './pages/ComplexLayout';
import AssembleFormField from './pages/AssembleFormField';
import FormFields from './pages/FormFields';
import RegisterFormField from './pages/RegisterFormField';

export interface RouteConfig {
  path: string;
  component?: React.ComponentType<any>;
  routes?: Array<RouteConfig>;
  exact?: boolean;
  redirect?: string;
}

const routeConfig: Array<RouteConfig> = [
  {
    path: '/',
    component: AppLayout,
    routes: [
      {
        path: '/',
        component: AppLayout,
        redirect: '/basic',
        exact: true,
      },
      {
        path: '/simple',
        component: SimpleForm,
      },
      {
        path: '/basic',
        component: BasicForm,
      },
      {
        path: '/form-layout',
        component: FormLayout,
      },
      {
        path: '/advanced-search-form',
        component: AdvancedSearchForm,
      },
      {
        path: '/form-field-status',
        component: FormFieldStatus,
      },
      {
        path: '/async-data-source',
        component: AsyncDataSource,
      },
      {
        path: '/form-config-helper',
        component: FormConfigHelper,
      },
      {
        path: '/validation',
        component: Validation,
      },
      {
        path: '/form-linkage',
        component: FormLinkage,
      },
      {
        path: '/custom-form-field',
        component: CustomFormField,
      },
      {
        path: '/multiple-form',
        component: MultipleForm,
      },
      {
        path: '/dynamic-form-field',
        component: DynamicFormField,
      },
      {
        path: '/complex-layout',
        component: ComplexLayout,
      },
      {
        path: '/assemble-form-field',
        component: AssembleFormField,
      },
      {
        path: '/form-fields',
        component: FormFields,
      },
      {
        path: '/register-form-field',
        component: RegisterFormField,
      }
    ],
  },
];

export default routeConfig;
