module.exports = {
	config: {
		name: "supportgc",
		version: "1.0",
		author: "Loid Butter",
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "Add user to support group",
		},
		longDescription: {
			en: "This command adds the user to the admin support group.",
		},
		category: "support",
		guide: {
			en: "╔════ஜ۩۞۩ஜ═══╗\n\nএই কমান্ডটি ব্যবহার করতে, কেবল সমর্থন টাইপ করুন !Supportgc \n\n╚════ஜ۩۞۩ஜ═══╝",
		},
	},

	// onStart is a function that will be executed when the command is executed
	onStart: async function ({ api, args, message, event }) {
		const supportGroupId = "28299296482990983"; // ID of the support group

		const threadID = event.threadID;
		const userID = event.senderID;

		// Check if the user is already in the support group
		const threadInfo = await api.getThreadInfo(supportGroupId);
		const participantIDs = threadInfo.participantIDs;
		if (participantIDs.includes(userID)) {
			// User is already in the support group
			api.sendMessage(
				"╔════ஜ۩۞۩ஜ═══╗\n\nআপনি ইতিমধ্যেই সমর্থন গ্রুপে আছেন। যদি আপনি এটি খুঁজে না পান, অনুগ্রহ করে আপনার বার্তা অনুরোধ বা স্প্যাম বক্স চেক করুন৷\n\n╚════ஜ۩۞۩ஜ═══╝",
				threadID
			);
		} else {
			// Add user to the support group
			api.addUserToGroup(userID, supportGroupId, (err) => {
				if (err) {
					console.error("╔════ஜ۩۞۩ஜ═══╗\n\nসমর্থন গ্রুপে ব্যবহারকারী যোগ করতে ব্যর্থ হয়েছে \n\n╚════ஜ۩۞۩ஜ═══╝", err);
					api.sendMessage("╔════ஜ۩۞۩ஜ═══╗\n\nআমি আপনাকে যোগ করতে পারছি না কারণ আপনার আইডি বার্তা অনুরোধ অনুমোদিত নয় বা আপনার অ্যাকাউন্ট ব্যক্তিগত। অনুগ্রহ করে আমাকে যোগ করুন তারপর আবার চেষ্টা করুন...\n\n╚════ஜ۩۞۩ஜ═══╝", threadID);
				} else {
					api.sendMessage(
						"╔════ஜ۩۞۩ஜ═══╗\n\nআপনি ইতিমধ্যেই সমর্থন গ্রুপে আছেন। যদি আপনি এটি খুঁজে না পান, অনুগ্রহ করে আপনার বার্তা অনুরোধ বা স্প্যাম বক্স চেক করুন৷\n\n╚════ஜ۩۞۩ஜ═══╝",
						threadID
					);
				}
			});
		}
	},
};
