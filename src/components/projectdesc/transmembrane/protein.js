import React from 'react'
import './protein.css'

function protein() {
  return (
    <div id = "protein">
        <div className="protein-title">
            <h1>Transmembrane Checker</h1>
        </div>
        <div className="protein-content">
            <div className="protein-info">
                <h3>About Transmembrane Tracker</h3>
                <p>
                    Transmembrane checker predicts if a protein is a transmembrane 
                    based on presence of a signal peptide, hydrophobic regions(s), and no prolines in hydrophobic regions (alpha helix).
                </p>
                <p>
                    Hydrophobicity is measued via Kyte-Dolittle (KD) scale, which detects the presence of hydrophobic regions in proteins. For this program:
                    <li>
                        Signal peptide is 8 amino acids long, KD > 2.5, first 30 amino acids
                    </li>
                    <li>
                        Hydrophobic region is 11 amino acids long, KD > 2.0, after 30 amino acids
                    </li>
                </p>
                <p>
                    Languages and Tools: Python
                </p>
                <p>
                    <a href="https://github.com/christunaroll/Transmembrane-Check">Github</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default protein
