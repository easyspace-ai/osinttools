import * as React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Database,
  Filter,
  History,
  Layers,
  TrendingUp,
  Zap,
  MessagesSquare,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { isAdmin, type CurrentUser } from "@/lib/authApi";
import { canAccessNavItem, NAV_PERMISSION_KEYS } from "@/lib/navPermissions";
import { WORKBENCH_PREFIX, type WorkbenchTab } from "@/lib/workbenchRoutes";

export type TabType = WorkbenchTab;

interface SaasSidebarProps {
  /** 是否折叠状态 */
  collapsed?: boolean;
  /** 当前用户信息 */
  user?: CurrentUser | null;
}

// 导航项配置
interface NavItemConfig {
  id: string;
  to: string;
  icon: React.ElementType;
  label: string;
  description: string;
  adminOnly?: boolean;
  permission?: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  {
    id: "polymarket",
    to: "/polymarket",
    icon: TrendingUp,
    label: "预测市场",
    description: "Polymarket 分析",
    permission: NAV_PERMISSION_KEYS.polymarket,
  },
  {
    id: "xstream",
    to: "/x-stream",
    icon: Zap,
    label: "X 信息流",
    description: "监测流实时数据",
    permission: NAV_PERMISSION_KEYS.xstream,
  },
  {
    id: "dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    description: "数据总览面板",
    permission: NAV_PERMISSION_KEYS.dashboard,
  },
  {
    id: "ai-session",
    to: "/ai-session",
    icon: MessagesSquare,
    label: "AI 会话",
    description: "情报工作台与技能",
  },
  {
    id: "admin",
    to: "/admin",
    icon: Settings,
    label: "管理",
    description: "用户、权限、技能组",
    adminOnly: true,
    permission: NAV_PERMISSION_KEYS.admin,
  },
];

// Logo 组件 - COMPACT
function Logo({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2.5">
      <div className="relative">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center shadow-sm shadow-blue-700/20">
          <TrendingUp size={15} className="text-white" />
        </div>
        {!collapsed && (
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-900 bg-emerald-500" />
        )}
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Quantum
          </span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight -mt-0.5">
            Pro Platform
          </span>
        </div>
      )}
    </div>
  );
}

// 导航项组件 - COMPACT
function NavItem({
  to,
  icon: Icon,
  label,
  description,
  collapsed,
}: {
  to: string;
  icon: any;
  label: string;
  description?: string;
  collapsed: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/analysis"}
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        cn(
          "group relative flex items-center gap-2 mx-1.5 px-2 py-1.5 rounded-md transition-all duration-150",
          isActive
            ? "bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-500/10 dark:to-blue-500/5 text-blue-700 dark:text-blue-300 shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-200"
        )
      }
    >
      {({ isActive }) => (
        <>
          {/* 选中指示器 - Slim */}
          {isActive && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-blue-600 to-blue-700 rounded-r-full" />
          )}

          {/* 图标 - Smaller */}
          <div
            className={cn(
              "flex items-center justify-center w-7 h-7 rounded-md transition-all duration-150",
              isActive
                ? "bg-blue-700 text-white shadow-sm shadow-blue-700/20"
                : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
            )}
          >
            <Icon size={16} strokeWidth={isActive ? 2.2 : 2} />
          </div>

          {/* 文本 - Compact */}
          {!collapsed && (
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-xs font-semibold leading-tight",
                  isActive ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-gray-300"
                )}
              >
                {label}
              </span>
              {description && (
                <span className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">
                  {description}
                </span>
              )}
            </div>
          )}

          {/* 折叠状态下的 Tooltip */}
          {collapsed && (
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 delay-75">
              <div className="px-2.5 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-md shadow-lg whitespace-nowrap">
                {label}
                {description && (
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 font-normal">
                    {description}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </NavLink>
  );
}

// 分隔线 - Thinner
function Divider() {
  return <div className="mx-3 my-2 h-px bg-gray-200 dark:bg-gray-800" />;
}

// 升级卡片 - COMPACT
function UpgradeCard({ collapsed }: { collapsed: boolean }) {
  if (collapsed) return null;

  return (
    <div className="mx-2.5 mb-2.5">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-3 text-white">
        <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-white/10" />
        <div className="absolute -right-1 -bottom-1 w-10 h-10 rounded-full bg-white/10" />

        <div className="relative">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Zap size={14} className="text-yellow-200" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-yellow-100">
              Pro Plan
            </span>
          </div>
          <p className="text-xs font-medium mb-2.5">
            解锁高级分析功能
          </p>
          <button className="w-full py-1 px-2.5 bg-white text-amber-600 text-[10px] font-semibold rounded-md hover:bg-yellow-50 transition-colors">
            立即升级
          </button>
        </div>
      </div>
    </div>
  );
}

// 主组件 - COMPACT
export function SaasSidebar({
  collapsed = false,
  user,
}: SaasSidebarProps) {
  const showAdmin = isAdmin(user);
  const visibleItems = NAV_ITEMS.filter((item) => {
    if (item.adminOnly && !showAdmin) return false;
    return canAccessNavItem(item.permission, user);
  });

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-gray-50 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
        collapsed ? "w-[56px]" : "w-[220px]"
      )}
    >
      {/* Logo 区域 */}
      <div>
        <Logo collapsed={collapsed} />
      </div>

      <Divider />

      {/* 导航列表 */}
      <nav className="flex-1 py-1.5 overflow-hidden">
        <div className="space-y-0.5">
          {visibleItems.map((item) => (
            <div key={item.id} className="contents">
              <NavItem
                to={item.to}
                icon={item.icon}
                label={item.label}
                description={item.description}
                collapsed={collapsed}
              />
            </div>
          ))}
        </div>
      </nav>

      {/* 底部区域 */}
      <div className="mt-auto">
        <UpgradeCard collapsed={collapsed} />
      </div>
    </aside>
  );
}
