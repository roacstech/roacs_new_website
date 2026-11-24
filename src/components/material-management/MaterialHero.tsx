"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Activity, 
  TrendingUp, 
  Gauge, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Disc, 
  Droplets, 
  Hexagon,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Database,
  Building2
} from "lucide-react";

interface StockItem {
  id: string;
  sku: string;
  name: string;
  category: "metals" | "gaskets" | "chemicals" | "fasteners";
  facility: string;
  bay: string;
  quantity: string;
  capacityPercent: number;
  status: "In Stock" | "Low Stock" | "Critical";
  statusType: "success" | "warning" | "danger";
  reorderPoint: string;
  unitCost: string;
  accentColor: string;
  icon: React.ElementType;
}

const STOCK_DATA: StockItem[] = [
  {
    id: "1",
    sku: "SKU-2321-364",
    name: "High-Tensile Steel Rods (12mm)",
    category: "metals",
    facility: "Warehouse E-14",
    bay: "Rack 08-B",
    quantity: "2,450 kg",
    capacityPercent: 88,
    status: "In Stock",
    statusType: "success",
    reorderPoint: "800 kg",
    unitCost: "$3.40 / kg",
    accentColor: "#0284C7",
    icon: Layers,
  },
  {
    id: "2",
    sku: "SKU-4419-268",
    name: "Industrial Silicone Gaskets",
    category: "gaskets",
    facility: "Central Depot",
    bay: "Bay 02-C",
    quantity: "140 pcs",
    capacityPercent: 18,
    status: "Low Stock",
    statusType: "warning",
    reorderPoint: "300 pcs",
    unitCost: "$18.50 / pc",
    accentColor: "#F59E0B",
    icon: Disc,
  },
  {
    id: "3",
    sku: "SKU-2717-884",
    name: "Hydraulic Fluid Type-IV (20L)",
    category: "chemicals",
    facility: "Main Yard",
    bay: "Tank C-4",
    quantity: "85 drums",
    capacityPercent: 72,
    status: "In Stock",
    statusType: "success",
    reorderPoint: "25 drums",
    unitCost: "$142.00 / drum",
    accentColor: "#0D9488",
    icon: Droplets,
  },
  {
    id: "4",
    sku: "SKU-1104-546",
    name: "Titanium Fasteners M8x40",
    category: "fasteners",
    facility: "Warehouse A-1",
    bay: "Bin 14-D",
    quantity: "12 boxes",
    capacityPercent: 5,
    status: "Critical",
    statusType: "danger",
    reorderPoint: "80 boxes",
    unitCost: "$95.00 / box",
    accentColor: "#EF4444",
    icon: Hexagon,
  },
];

export function MaterialHero() {
  const [activeTab, setActiveTab] = useState<"all" | "critical" | "metals" | "fluids">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return STOCK_DATA.filter((item) => {
      // Tab filter
      if (activeTab === "critical" && item.statusType === "success") return false;
      if (activeTab === "metals" && item.category !== "metals") return false;
      if (activeTab === "fluids" && item.category !== "chemicals") return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.sku.toLowerCase().includes(query) ||
          item.facility.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-28">
      {/* Precision Tech Background Grid with Radial Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 35%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, #000 35%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      {/* Gentle Ambient Top Radial Light */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle 450px at 50% -20%, rgba(99, 102, 241, 0.12), rgba(37, 99, 235, 0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =========================================================
              Left Column: Value Proposition & Executive Authority
             ========================================================= */}
          <div className="lg:col-span-5 lg:pr-2">
            {/* High-Intent Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide uppercase shadow-sm border border-slate-800 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-slate-300 text-[11px] tracking-widest">ENTERPRISE SAAS v2.4</span>
              <span className="text-slate-600 font-normal">|</span>
              <span className="text-indigo-300 font-medium">Supply Chain OS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-6">
              Roacs Material<br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Management
              </span>{" "}
              Platform
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
              An enterprise-grade supply chain control tower engineered by Roacs Corporation. Eliminate stock-outs, automate multi-tiered procurement cycles, and synchronize inventory flow with sub-second auditability.
            </p>

            {/* Dual Conversion CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 shadow-md shadow-slate-950/20 border border-slate-800 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Schedule Platform Demo</span>
                <ArrowRight size={16} className="text-indigo-400" />
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                  <Play size={10} className="fill-slate-800 text-slate-800 ml-0.5" />
                </div>
                <span>View System Capabilities</span>
              </Link>
            </div>

            {/* 3 Executive Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/90">
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div className="p-1.5 rounded-lg bg-indigo-100/70 text-indigo-700 mt-0.5">
                  <Zap size={14} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Sub-Second Sync</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Live multi-hub socket</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div className="p-1.5 rounded-lg bg-emerald-100/70 text-emerald-700 mt-0.5">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Automated POs</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Rule-based routing</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                <div className="p-1.5 rounded-lg bg-blue-100/70 text-blue-700 mt-0.5">
                  <BarChart3 size={14} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Predictive Stock</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Dynamic thresholds</div>
                </div>
              </div>
            </div>

            {/* Security & Compliance Badges */}
            <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-500" />
                SOC 2 Type II
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-500" />
                ISO 27001 Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Database size={12} className="text-indigo-500" />
                SAP & Oracle Connectors
              </span>
            </div>
          </div>

          {/* =========================================================
              Right Column: Interactive Control Tower Console
             ========================================================= */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              
              {/* Outer Shell with Layered Bevel & Shadow */}
              <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/[0.04] ring-1 ring-slate-900/[0.04] overflow-hidden">
                
                {/* Console Chrome / Top Bar */}
                <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
                  {/* Traffic lights + Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                    </div>

                    <div className="h-4 w-[1px] bg-slate-200 mx-0.5" />

                    <div className="flex items-center gap-2">
                      {/* Roacs Red Triangle Logo Mark */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M12 2L2 20H22L12 2Z" fill="#ED1918" />
                        <path d="M12 7.5L6.5 17.5H17.5L12 7.5Z" fill="#FFFFFF" />
                        <circle cx="12" cy="14" r="1.8" fill="#ED1918" />
                      </svg>
                      <span className="text-xs font-bold text-slate-800 tracking-tight">
                        Live Warehouse Stock Balances
                      </span>
                    </div>
                  </div>

                  {/* Telemetry Status Indicator */}
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Auto-Sync Active</span>
                      <Activity size={11} className="text-emerald-600 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Sub-Header: Filter Tabs + Live Search Bar */}
                <div className="px-4 py-2.5 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  {/* Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === "all"
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      All Facilities ({STOCK_DATA.length})
                    </button>
                    <button
                      onClick={() => setActiveTab("critical")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === "critical"
                          ? "bg-amber-500 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      Alerts & Low (2)
                    </button>
                    <button
                      onClick={() => setActiveTab("metals")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === "metals"
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      Raw Metals
                    </button>
                    <button
                      onClick={() => setActiveTab("fluids")}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === "fluids"
                          ? "bg-teal-600 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      Fluids
                    </button>
                  </div>

                  {/* Micro Search Input */}
                  <div className="relative flex items-center">
                    <Search size={13} className="absolute left-2.5 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter SKUs..."
                      className="pl-7 pr-3 py-1 rounded-lg text-xs border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-36 transition-all"
                    />
                  </div>
                </div>

                {/* Dense Inventory List */}
                <div className="p-4 space-y-2.5">
                  {filteredItems.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-500">
                      No matching materials found for &ldquo;{searchQuery}&rdquo;.
                    </div>
                  ) : (
                    filteredItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className="group relative flex items-center justify-between p-3 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50/80 hover:border-slate-300 transition-all duration-150"
                        >
                          {/* Left Accent Stripe */}
                          <div
                            className="absolute left-0 top-2 bottom-2 w-1 rounded-r"
                            style={{ backgroundColor: item.accentColor }}
                          />

                          {/* Left: Category Icon + Item Details */}
                          <div className="flex items-center gap-3 pl-2.5">
                            <div 
                              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                              style={{ 
                                backgroundColor: `${item.accentColor}15`,
                                color: item.accentColor
                              }}
                            >
                              <Icon size={18} />
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-900 text-sm tracking-tight group-hover:text-indigo-600 transition-colors">
                                  {item.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                <span className="font-mono text-[11px] font-medium bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 border border-slate-200/60">
                                  {item.sku}
                                </span>
                                <span>•</span>
                                <span>{item.facility}</span>
                                <span>•</span>
                                <span className="text-slate-400">{item.bay}</span>
                              </div>
                            </div>
                          </div>

                          {/* Center: Micro Capacity Progress Bar */}
                          <div className="hidden sm:flex flex-col items-end gap-1 w-28">
                            <div className="flex items-center justify-between w-full text-[11px] text-slate-500">
                              <span>Capacity</span>
                              <span className="font-mono font-semibold text-slate-700">{item.capacityPercent}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${item.capacityPercent}%`,
                                  backgroundColor: item.accentColor,
                                }}
                              />
                            </div>
                          </div>

                          {/* Right: Quantity + Status Badge */}
                          <div className="text-right pl-3 shrink-0">
                            <div className="text-sm font-bold text-slate-950 font-mono tracking-tight">
                              {item.quantity}
                            </div>
                            <div className="mt-0.5">
                              {item.statusType === "success" && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                                  <span className="text-[10px]">↗</span> In Stock
                                </span>
                              )}
                              {item.statusType === "warning" && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full">
                                  <AlertTriangle size={10} className="text-amber-600" /> Low Stock
                                </span>
                              )}
                              {item.statusType === "danger" && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200/60 px-2 py-0.5 rounded-full">
                                  <XCircle size={10} className="text-rose-600" /> Out of Stock
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Bottom Bento Telemetry (3 Executive KPI Cards) */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Metric 1 */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-500">Discrepancy Rate</div>
                      <div className="text-base font-extrabold text-slate-900 tracking-tight font-mono">
                        &lt; 0.02%
                      </div>
                      <div className="text-[10px] text-emerald-600 font-semibold">99.98% Accuracy</div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Gauge size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-500">Procurement Velocity</div>
                      <div className="text-base font-extrabold text-slate-900 tracking-tight font-mono">
                        3.4x Faster
                      </div>
                      <div className="text-[10px] text-indigo-600 font-semibold">Auto PO Dispatch</div>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-500">Audited Valuation</div>
                      <div className="text-base font-extrabold text-slate-900 tracking-tight font-mono">
                        $4.28M
                      </div>
                      <div className="text-[10px] text-blue-600 font-semibold">4 Facilities Synced</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
