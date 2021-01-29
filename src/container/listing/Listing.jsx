import React, { Component } from "react";
import "./listing.css";
import InputSection from "../../components/input-section/InputSection";
import ListSection from "../../components/list-section/ListSection";
import { db } from "../../firebase";
import Loading from "../../components/loading/Loading"
import "../../components/list-section/listsection.css"

const chinha = [
	"्",
	"ा",
	"ि",
	"ी",
	"ु",
	"ू",
	"े",
	"ै",
	"ो",
	"ौ",
	"ं",
	"ॅ",
	"ॉ",
	"ः",
	"ृ",
];

class Listing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			searched: false,
			input: "",
			searchAgainst: "pustakName",
			results: [],
		};
	}

	search = (label, inputArray) => {
		this.setState({
			loading: true,
		});

		let secondaryLabel =
			label === "pustakName" ? "pustakFullName" : "lekhakFullName";

		db.collection("bookList")
			.where(secondaryLabel, "==", inputArray.join(" "))
			.get()
			.then((snapshot) => {
				let array = [];

				snapshot.forEach((doc) => {
					let book = doc.data();
					array.push({ ...book, id: doc.id });
				});

				this.setState({
					results: array,
					loading: false,
				});

				if (this.state.results.length === 0) {
					db.collection("bookList")
						.where(label, "array-contains-any", inputArray)
						.get()
						.then((snapshot) => {
							let primary = [];
							let secondary = [];

							snapshot.forEach((doc) => {
								let book = doc.data();

								if (
									this.getMulakshara(inputArray) ===
									this.getMulakshara(book[label])
								) {
									primary.push({ ...book, id: doc.id });
								} else {
									secondary.push({ ...book, id: doc.id });
								}
							});

							this.setState({
								results: [...primary, ...secondary],
								loading: false,
							});

							if (this.state.results.length === 0) {
								if (label === "pustakName") {
									secondaryLabel = "pustakMulakshare";
								} else {
									secondaryLabel = "lekhakMulakshare";
								}

								db.collection("bookList")
									.where(
										secondaryLabel,
										"array-contains-any",
										this.getMulakshara(inputArray).split(
											" "
										)
									)
									.get()
									.then((snapshot) => {
										let primary = [];
										let secondary = [];

										snapshot.forEach((doc) => {
											let book = doc.data();

											if (
												this.getMulakshara(
													inputArray
												) ===
												this.getMulakshara(book[label])
											) {
												primary.push({
													...book,
													id: doc.id,
												});
											} else {
												secondary.push({
													...book,
													id: doc.id,
												});
											}
										});

										this.setState({
											results: [...primary, ...secondary],
											loading: false,
										});
									})
									.catch((error) => console.error(error));
							}
						})
						.catch((error) => console.error(error));
				}
			})
			.catch((error) => console.error(error));
	};

	getMulakshara = (inputArray) => {
		let superArray = [];

		inputArray.forEach((word) => {
			chinha.forEach((chinh) => {
				word = word.replace(new RegExp(chinh, "g"), "");
			});
			superArray.push(word);
		});

		return superArray.join(" ");
	};

	fetchResults = (event) => {
		event.preventDefault();

		if (this.state.input.length) {
			this.setState({ results: [], searched: true });
			let inputArray = this.state.input.split(" ");

			// reducing the array to max length 10
			if (inputArray.length > 10) {
				inputArray.splice(9, inputArray.length - 10);
			}

			this.search(this.state.searchAgainst, inputArray);
		} else {
			this.setState({ results: [], searched: false });
		}
	};

	render() {
		return (
			<div className="container">
				<div className="logo">
					सार्वजनिक वाचनालय <br /> राजगुरूनगर
				</div>
				<InputSection
					onInput={(event) =>
						this.setState({
							input: event.target.value.toLowerCase().trim(),
						})
					}
					searchAgainst={this.state.searchAgainst}
					onChange={(event) =>
						this.setState({
							searchAgainst: event.target.value,
						})
					}
					onSearch={(event) => this.fetchResults(event)}
				/>
				{this.state.loading ? <div className="table-super"><Loading page="listing"/></div>: null}
				<ListSection
					setCurrentDetails={this.props.setCurrentDetails}
					tableElements={this.state.results}
					searched={this.state.searched}
				/>
			</div>
		);
	}
}

export default Listing;
