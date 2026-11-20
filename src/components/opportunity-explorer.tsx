"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { careerPaths } from "@/lib/site-data";
import { SectorIcon } from "@/components/sector-icon";

export function OpportunityExplorer({ initialSector = "All fields" }: { initialSector?: string }) {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState(initialSector);
  const filtered = useMemo(() => careerPaths.filter((path) => {
    const matchesSector = sector === "All fields" || path.name === sector;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${path.name} ${path.description} ${path.roles.join(" ")}`.toLowerCase().includes(query);
    return matchesSector && matchesSearch;
  }), [search, sector]);

  return <>
    <div className="opportunity-tools"><label className="search-control"><Search size={20} strokeWidth={1.8} /><span className="sr-only">Search career paths</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search a role or industry..." />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><X size={16} /></button>}</label><label className="select-control"><span>Industry</span><select value={sector} onChange={(event) => setSector(event.target.value)}><option>All fields</option>{careerPaths.map((path) => <option key={path.name}>{path.name}</option>)}</select></label></div>
    <div className="results-label" aria-live="polite">SHOWING <strong>{filtered.length}</strong> CAREER {filtered.length === 1 ? "FIELD" : "FIELDS"}</div>
    {filtered.length ? <div className="career-grid">{filtered.map((path) => <article className="career-card" key={path.slug}>
      <Link href={`/opportunities/${path.slug}`} className="career-card-preview" aria-label={`Read about ${path.name} careers`}>
        <div className="career-card-top"><span className="career-card-icon"><SectorIcon name={path.icon} size={28} /></span><ArrowUpRight className="career-card-open" size={19} /></div>
        <h3>{path.name}</h3><p>{path.description}</p>
      </Link>
      <div className="career-roles-label">EXAMPLE ROLES</div><div className="career-roles">{path.roles.map((role) => <span key={role}>{role}</span>)}</div>
      <div className="career-card-actions"><Link href={`/opportunities/${path.slug}`} className="career-card-details">View details <ArrowUpRight size={15} /></Link><Link href={`/submit-cv?sector=${encodeURIComponent(path.name)}`} className="career-card-link">Share your CV <ArrowUpRight size={16} /></Link></div>
    </article>)}</div> : <div className="empty-results"><Search size={32} strokeWidth={1.3} /><h3>No matching fields found</h3><p>Try another search term or select all fields to explore more possibilities.</p><button type="button" className="text-button" onClick={() => { setSearch(""); setSector("All fields"); }}>Clear filters <ArrowUpRight size={16} /></button></div>}
  </>;
}
