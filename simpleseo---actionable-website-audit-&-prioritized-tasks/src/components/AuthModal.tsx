import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  Mail, 
  Lock, 
  User, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  LogOut,
  KeyRound
} from "lucide-react";

export interface UserAccount {
  name: string;
  email: string;
  website: string;
  plan: string;
  createdAt: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserAccount | null;
  onLogin: (user: UserAccount) => void;
  onLogout: () => void;
  initialTab?: "signin" | "signup";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
  initialTab = "signin",
}) => {
  const [tab, setTab] = useState<"signin" | "signup" | "demo">(initialTab);
  const [email, setEmail] = useState("alex@flourandcrust.co.uk");
  const [password, setPassword] = useState("password123");
  const [name, setName] = useState("Alex Morris");
  const [website, setWebsite] = useState("flourandcrust.co.uk");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTab(initialTab || "signin");
      setMessage(null);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      const computedName = email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      const user: UserAccount = {
        name: computedName || "Business Owner",
        email: email.trim(),
        website: website.trim() || "flourandcrust.co.uk",
        plan: "Starter Plan (£10/mo)",
        createdAt: "Active Member",
      };
      onLogin(user);
      setMessage({ type: "success", text: `Welcome back, ${user.name}! Signed in successfully.` });
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 600);
    }, 450);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) {
      setMessage({ type: "error", text: "Please enter your name and email." });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      const user: UserAccount = {
        name: name.trim(),
        email: email.trim(),
        website: website.trim() || "mywebsite.com",
        plan: "14-Day Free Trial",
        createdAt: "Just Joined",
      };
      onLogin(user);
      setMessage({ type: "success", text: "Account created! 14-day free trial activated." });
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 600);
    }, 450);
  };

  const handle1ClickDemo = (demoType: "bakery" | "ecommerce" | "agency") => {
    setIsLoading(true);
    setMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      const demos: Record<string, UserAccount> = {
        bakery: {
          name: "Alex Morris",
          email: "alex@flourandcrust.co.uk",
          website: "flourandcrust.co.uk",
          plan: "Starter Plan (£10/mo)",
          createdAt: "Member since June",
        },
        ecommerce: {
          name: "Sophia Chen",
          email: "sophia@nordiccraftgoods.com",
          website: "nordiccraftgoods.com",
          plan: "Growth Plan (£18/mo)",
          createdAt: "Member since April",
        },
        agency: {
          name: "David Wright",
          email: "david@wrightgrowth.co.uk",
          website: "wrightgrowth.co.uk",
          plan: "Agency Plan (£25/mo)",
          createdAt: "Member since Jan",
        }
      };

      const selected = demos[demoType];
      onLogin(selected);
      setMessage({ type: "success", text: `Signed in as ${selected.name} (${selected.website})!` });
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 500);
    }, 350);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-extrabold text-base tracking-tight font-heading">
              Simple<span className="text-indigo-400">SEO</span> Account
            </span>
          </div>

          <p className="text-[11px] text-slate-300">
            {currentUser 
              ? "Your active workspace and automated weekly SEO monitors." 
              : "Sign in to access weekly checklists & AI search ranking insights."}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6">
          {currentUser ? (
            /* Logged in User Profile State */
            <div className="space-y-4">
              <div className="p-3.5 bg-indigo-50/80 border border-indigo-200/80 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900 text-sm truncate">{currentUser.name}</h3>
                    <p className="text-[11px] text-slate-500 font-mono truncate">{currentUser.email}</p>
                    <span className="inline-block mt-0.5 text-[10px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                      {currentUser.plan}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Monitored Site:</span>
                  <span className="font-bold text-slate-800 font-mono">{currentUser.website}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-400">Scan Schedule:</span>
                  <span className="font-bold text-emerald-600">Weekly (Active)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Action Tasks:</span>
                  <span className="font-bold text-indigo-600">3 Priority Tasks Ready</span>
                </div>
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    const el = document.getElementById("audit-tool");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Run Immediate Website Scan</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    setMessage({ type: "success", text: "Signed out successfully." });
                  }}
                  className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          ) : (
            /* Auth Form (Tabs: Sign In / Create Account / 1-Click Demo) */
            <div>
              {/* Tab Selector */}
              <div className="flex p-1 bg-slate-100 rounded-xl mb-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => { setTab("signin"); setMessage(null); }}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tab === "signin" 
                      ? "bg-white text-slate-900 shadow-xs" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setTab("signup"); setMessage(null); }}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tab === "signup" 
                      ? "bg-white text-slate-900 shadow-xs" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => { setTab("demo"); setMessage(null); }}
                  className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                    tab === "demo" 
                      ? "bg-indigo-600 text-white shadow-xs" 
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                >
                  1-Click Demo
                </button>
              </div>

              {/* Status Notification */}
              {message && (
                <div className={`p-2.5 rounded-xl mb-3 text-xs font-medium flex items-center gap-2 ${
                  message.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}>
                  {message.type === "success" ? <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> : <Lock className="w-4 h-4 text-rose-600 flex-shrink-0" />}
                  <span>{message.text}</span>
                </div>
              )}

              {/* TAB 1: SIGN IN */}
              {tab === "signin" && (
                <form onSubmit={handleSignIn} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@flourandcrust.co.uk"
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-[11px] font-bold text-slate-700">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setMessage({ type: "success", text: "Password reset link sent to your email inbox." })}
                        className="text-[10px] text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-200 mt-2"
                  >
                    <span>{isLoading ? "Signing in..." : "Sign In to Workspace"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* 1-Click Fill Helper */}
                  <div className="pt-2 border-t border-slate-100 text-center">
                    <button
                      type="button"
                      onClick={() => handle1ClickDemo("bakery")}
                      className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer inline-flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-indigo-500" />
                      <span>Instant Sign-In with Demo Account (Flour & Crust Bakery)</span>
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 2: SIGN UP */}
              {tab === "signup" && (
                <form onSubmit={handleSignUp} className="space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morris"
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@flourandcrust.co.uk"
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                      Website URL
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="flourandcrust.co.uk"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="p-2.5 bg-indigo-50/70 border border-indigo-200/60 rounded-xl text-[10px] text-indigo-900 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span>Includes 14-day free trial. No card required.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-200"
                  >
                    <span>{isLoading ? "Creating..." : "Create Account & Start Trial"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {/* TAB 3: 1-CLICK DEMO */}
              {tab === "demo" && (
                <div className="space-y-2">
                  <p className="text-[11px] text-slate-600 mb-2">
                    Click any simulated business profile to test the workspace immediately:
                  </p>

                  <button
                    type="button"
                    onClick={() => handle1ClickDemo("bakery")}
                    disabled={isLoading}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-slate-900">Flour & Crust Bakery</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Local</span>
                      </div>
                      <span className="text-[10px] text-slate-500">alex@flourandcrust.co.uk • Starter (£10/mo)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handle1ClickDemo("ecommerce")}
                    disabled={isLoading}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-slate-900">Nordic Craft Goods</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">E-Commerce</span>
                      </div>
                      <span className="text-[10px] text-slate-500">sophia@nordiccraftgoods.com • Growth (£18/mo)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handle1ClickDemo("agency")}
                    disabled={isLoading}
                    className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-slate-900">Wright Growth Consulting</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-200">Agency</span>
                      </div>
                      <span className="text-[10px] text-slate-500">david@wrightgrowth.co.uk • Agency (£25/mo)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
          <span>🔒 256-bit secure session</span>
          <span>SimpleSEO v2.4</span>
        </div>
      </div>
    </div>
  );
};
