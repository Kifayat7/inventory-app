import React from 'react';
import './InventoryTable.css'; // Create this file for styling if needed

const InventoryTable = () => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th rowSpan="2">S.#</th>
                        <th rowSpan="2">Part Code</th>
                        <th rowSpan="2">Part Name</th>
                        <th rowSpan="2">Part Cost</th>
                        <th rowSpan="2">Open Balance</th>
                        <th colSpan="3">JAN</th>
                        <th colSpan="3">FEB</th>
                        <th colSpan="3">MAR</th>
                        <th colSpan="3">APR</th>
                        <th colSpan="3">MAY</th>
                        <th colSpan="3">JUN</th>
                        <th colSpan="3">JUL</th>
                        <th colSpan="3">AUG</th>
                        <th colSpan="3">SEP</th>
                        <th colSpan="3">OCT</th>
                        <th colSpan="3">NOV</th>
                        <th colSpan="3">DEC</th>
                        <th rowSpan="2">Total Bought</th>
                        <th rowSpan="2">Total Consumed</th>
                        <th rowSpan="2">Current Inventory</th>
                    </tr>
                    <tr>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                        <th>Used</th>
                        <th>Buy</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>P12345</td>
                        <td>Example Part</td>
                        <td>$10.00</td>
                        <td>100</td>
                        <td>5</td>
                        <td>10</td>
                        <td>105</td>
                        <td>3</td>
                        <td>12</td>
                        <td>110</td>
                        <td>4</td>
                        <td>8</td>
                        <td>114</td>
                        <td>2</td>
                        <td>6</td>
                        <td>118</td>
                        <td>1</td>
                        <td>10</td>
                        <td>127</td>
                        <td>5</td>
                        <td>14</td>
                        <td>136</td>
                        <td>7</td>
                        <td>9</td>
                        <td>138</td>
                        <td>4</td>
                        <td>11</td>
                        <td>145</td>
                        <td>6</td>
                        <td>15</td>
                        <td>154</td>
                        <td>8</td>
                        <td>13</td>
                        <td>159</td>
                        <td>5</td>
                        <td>10</td>
                        <td>164</td>
                        <td>3</td>
                        <td>12</td>
                        <td>169</td>
                        <td>125</td>
                        <td>80</td>
                        <td>169</td>
                    </tr>
                    {/* Repeat <tr> for more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
