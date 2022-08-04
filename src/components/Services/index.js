import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import Icon4 from "../../images/svg-7.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesSubtitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesSubtitle>
        Ofrecemos una amplia gama de servicios en las áreas financiera,
        contable, impositiva y de gestión humana de la empresa, adaptándose a
        las necesidades específicas de cada cliente.
      </ServicesSubtitle>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Auditoria</ServicesH2>
          <ServicesP>• Auditoría de Estados Financieros</ServicesP>
          <ServicesP>• Revisión de Estados Financieros</ServicesP>
          <ServicesP>• Auditoria impositiva</ServicesP>
          <ServicesP>• Revisión Fiscal</ServicesP>
          <ServicesP>• Proyecciones financieras</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Impuestos</ServicesH2>
          <ServicesP>
            • Preparación y cumplimiento de declaraciones juradas
          </ServicesP>
          <ServicesP>• Revisión de créditos fiscales</ServicesP>
          <ServicesP>• Análisis de inventario</ServicesP>
          <ServicesP>• Representación ante la DGII</ServicesP>
          <ServicesP>• Acuerdos de exenciones fiscales</ServicesP>
          <ServicesP>• Impuesto de inmuebles</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Asesoría financiera y administrativa</ServicesH2>
          <ServicesP>• Organización de negocios</ServicesP>
          <ServicesP>• Valuación de negocios</ServicesP>
          <ServicesP>• Planes de negocios</ServicesP>
          <ServicesP>• Evaluación de rendimientos</ServicesP>
          <ServicesP>• Asesoramiento en Procesos</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Outsourcing</ServicesH2>
          <ServicesP>• Contabilidad</ServicesP>
          <ServicesP>
            • Revisión e implementación de procedimientos contables
          </ServicesP>
          <ServicesP>• Evaluaciones de controles internos</ServicesP>
          <ServicesP>• Análisis de costos</ServicesP>
          <ServicesP>• Estructuración organizacional</ServicesP>
          <ServicesP>• Asesoramiento en recursos humanos</ServicesP>
          <ServicesP>• Evaluación de Recursos Humanos</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Legales</ServicesH2>
          <ServicesP>• Constitución de compañías</ServicesP>
          <ServicesP>• Incorporación de ONG</ServicesP>
          <ServicesP>
            • Asesoría en registro de nombre comercial y de marca.{" "}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
