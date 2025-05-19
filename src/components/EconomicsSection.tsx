import React from "react";
import {
  TrendingUp,
  DollarSign,
  Leaf,
  Wind,
  Droplet
} from "lucide-react";
import AnimatedCounter from "../components/animations/AnimatedCounter";

type MetricCardProps = {
  icon: JSX.Element;
  title: string;
  value: string | number | JSX.Element;
  unit?: string | JSX.Element;
  description: string;
};

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  unit,
  description
}) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <div className="flex items-center mb-2">
      <div className="mr-2">{icon}</div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
    </div>
    <div className="text-3xl font-bold text-green-700 mb-1">
      {value}
      {unit && <span className="ml-1">{unit}</span>}
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

type SliderMetricCardProps = {
  label: string;
  value: string;
};

const SliderMetricCard: React.FC<SliderMetricCardProps> = ({ label, value }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-medium text-gray-800 text-sm mb-1">{label}</h4>
    <div className="text-xl font-bold text-green-700">{value}</div>
  </div>
);

type ImpactListProps = {
  items: string[];
};

const ImpactList: React.FC<ImpactListProps> = ({ items }) => (
  <ul className="space-y-2" role="list">
    {items.map((text, i) => (
      <li key={i} role="listitem" className="flex items-start">
        <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center mt-0.5">
          ✓
        </div>
        <span className="ml-2 text-gray-700">{text}</span>
      </li>
    ))}
  </ul>
);

type ROI = {
  investment: number;
  irr: number;
  payback: number;
  carbon: number;
};

type EconomicsSectionProps = {
  roi: ROI;
  roiValue: number;
  setRoiValue: (value: number) => void;
};

const EconomicsSection: React.FC<EconomicsSectionProps> = ({ roi, roiValue, setRoiValue }) => {
  const formattedROI = {
    investment: roi.investment.toLocaleString(undefined, { maximumFractionDigits: 1 }),
    irr: roi.irr.toFixed(1),
    payback: roi.payback.toFixed(1),
    carbon: roi.carbon.toLocaleString(undefined, { maximumFractionDigits: 1 })
  };

  const capacity = 50000 + (roiValue / 100) * 200000;

  return (
    <section id="economics" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Economics & Environment
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our approach delivers exceptional returns on investment while creating significant environmental benefits.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Economic Performance */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-800 text-white px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Economic Performance
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetricCard
                icon={<DollarSign className="h-5 w-5 text-amber-600" />}
                title="Internal Rate of Return"
                value={<AnimatedCounter from={0} to={roi.irr} duration={1500} decimals={1} />}
                unit="%"
                description="Industry-leading returns above average renewable energy projects"
              />
              <MetricCard
                icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                title="Payback Period"
                value={<AnimatedCounter from={0} to={roi.payback} duration={1500} decimals={1} />}
                unit=" years"
                description="Rapid return on capital with long-term stable cash flows"
              />
              <div className="md:col-span-2">
                <MetricCard
                  icon={<DollarSign className="h-5 w-5 text-green-600" />}
                  title="Total Investment"
                  value="$"
                  unit={
                    <AnimatedCounter
                      from={0}
                      to={roi.investment}
                      duration={1500}
                      decimals={1}
                    />
                  }
                  description="Scalable investment opportunities from pilot to commercial scale"
                />
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-800 text-white px-6 py-4">
              <h3 className="text-xl font-semibold flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Environmental Impact
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetricCard
                icon={<Wind className="h-5 w-5 text-green-600" />}
                title="Carbon Reduction"
                value={<AnimatedCounter from={0} to={roi.carbon} duration={1500} decimals={1} />}
                unit="M tonnes"
                description="Annual CO₂ emissions avoided vs. fossil fuels"
              />
              <MetricCard
                icon={<Droplet className="h-5 w-5 text-blue-600" />}
                title="Water Usage Reduction"
                value="45"
                unit="%"
                description="Lower water usage than other biofuel technologies"
              />
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-800 mb-2">Additional Environmental Benefits</h4>
                <ImpactList
                  items={[
                    "Reduction of field burning, improving local air quality",
                    "Prevents methane emissions from decomposing agricultural waste",
                    "Process byproducts used for soil enrichment and carbon sequestration"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ROI Simulator */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-green-800 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Investment Simulator</h3>
            <p className="text-green-100 text-sm">Adjust the scale to see how investment size affects returns</p>
          </div>
          <div className="p-6">
            {/* Slider */}
            <div className="mb-6">
              <label htmlFor="scale-slider" className="block text-sm font-medium text-gray-700 mb-2">
                Facility Scale (Annual Capacity)
              </label>
              <input
                id="scale-slider"
                type="range"
                min="0"
                max="100"
                value={roiValue}
                onChange={(e) => setRoiValue(parseInt(e.target.value))}
                className="w-full h-2 accent-green-600 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                aria-label="Facility scale in tonnes per year"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50,000 tonnes/year</span>
                <span>250,000 tonnes/year</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Selected: <span className="font-semibold">{capacity.toLocaleString()}</span> tonnes/year
              </p>
            </div>

            {/* Output Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <SliderMetricCard label="Investment" value={`$${formattedROI.investment}M`} />
              <SliderMetricCard label="IRR" value={`${formattedROI.irr}%`} />
              <SliderMetricCard label="Payback Period" value={`${formattedROI.payback} years`} />
              <SliderMetricCard label="Carbon Reduction" value={`${formattedROI.carbon}M tonnes`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;
